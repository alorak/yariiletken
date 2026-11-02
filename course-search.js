/* Offline, bilingual search across locally maintained 02–06 course narratives. */
(() => {
  "use strict";
  const normalize = value => String(value ?? "")
    .normalize("NFKD").toLowerCase().replace(/\u0131/g,"i")
    .replace(/[\u0300-\u036f]/g,"").replace(/([a-z])_([a-z])/g,"$1$2")
    .replace(/\s+/g," ").trim();
  const plain = value => String(value ?? "")
    .replace(/<\/?(?:sub|sup)>/gi,"")
    .replace(/<[^>]*>/g," ").replace(/&(?:nbsp|#160);/gi," ")
    .replace(/&(?:lt|#60);/gi,"<").replace(/&(?:gt|#62);/gi,">")
    .replace(/&(?:amp|#38);/gi,"&").replace(/\s+/g," ").trim();
  const escape = value => String(value ?? "").replace(/[&<>"']/g,ch =>
    ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  function buildIndex(lessons) {
    return (Array.isArray(lessons)?lessons:[]).flatMap(lesson =>
      (lesson.topics||[]).map((topic,i)=>({
        lessonId:lesson.id,lessonTitle:lesson.navTitle||lesson.title,topicIndex:i,
        title:plain(topic.title),
        paragraphs:(topic.paragraphs||[]).map(plain),
        key:plain(topic.key),equation:plain(topic.equation)
      })));
  }
  function search(index,query,limit=30) {
    const needle=normalize(query);
    if(needle.length<2)return [];
    const tokens=needle.split(/\s+/).filter(Boolean);
    return (index||[]).map(item=>{
      const fields=[item.title,...item.paragraphs,item.key,item.equation];
      const normalized=fields.map(normalize);
      const text=normalized.join(" ");
      if(!tokens.every(token=>text.includes(token)))return null;
      const title=normalized[0];
      const matchedBody=normalized.findIndex((v,i)=>i>0&&v.includes(needle));
      const matching=matchedBody>0?matchedBody:normalized.findIndex((v,i)=>i>0&&tokens.some(token=>v.includes(token)));
      const field=matching>0?fields[matching]:item.title;
      const normField=normalize(field);
      const at=normField.indexOf(needle)>=0?normField.indexOf(needle):Math.max(0,normField.indexOf(tokens[0]));
      // Preserve enough context without indexing markup or running any external search.
      const from=Math.max(0,at-60);
      const snippet=(from?"…":"")+field.slice(from,from+195)+(field.length>from+195?"…":"");
      const score=title.includes(needle)?100:
        title.includes(tokens[0])?65:matchedBody>0?45:20;
      return {...item,score,snippet};
    }).filter(Boolean).sort((a,b)=>b.score-a.score||a.lessonId.localeCompare(b.lessonId)||
      a.topicIndex-b.topicIndex).slice(0,limit);
  }
  function offsetMap(text) {
    let normalized="",offsets=[],at=0;
    for(const char of text) {
      const norm=normalize(char);
      for(let j=0;j<norm.length;j++){normalized+=norm[j];offsets.push([at,at+char.length]);}
      at+=char.length;
    }
    return {normalized,offsets};
  }
  function highlightTopic(article,query) {
    if(!article || !query || typeof document==="undefined" || typeof NodeFilter==="undefined")return null;
    const full=normalize(query),terms=[full,...full.split(/\s+/)].filter(v=>v.length>=2);
    const walker=document.createTreeWalker(article,NodeFilter.SHOW_TEXT,{
      acceptNode(node) {
        if(!node.nodeValue?.trim() || node.parentElement?.closest("svg,script,style,button,mark"))return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    let first=null,count=0;
    for(const node of nodes) {
      if(count>=24)break;
      const original=node.nodeValue;
      const {normalized,offsets}=offsetMap(original);
      const term=terms.find(t=>normalized.includes(t));
      if(!term)continue;
      const fragment=document.createDocumentFragment();
      let from=0,start=0;
      while((start=normalized.indexOf(term,start))!==-1&&count<24) {
        const begin=offsets[start][0],end=offsets[start+term.length-1][1];
        if(begin<from){start+=term.length;continue;}
        fragment.append(document.createTextNode(original.slice(from,begin)));
        const mark=document.createElement("mark");
        mark.className="course-search-highlight";
        mark.textContent=original.slice(begin,end);
        fragment.append(mark);
        if(!first)first=mark;
        from=end;start+=term.length;count++;
      }
      fragment.append(document.createTextNode(original.slice(from)));
      node.parentNode.replaceChild(fragment,node);
    }
    return first;
  }
  const words={
    tr:{label:"Konu anlatımlarında ara",placeholder:"Konu veya kavram ara…",hint:"02–06 derslerinin tüm konu anlatımlarında arayın.",
      short:"Aramak için en az 2 karakter yazın.",none:"Sonuç bulunamadı. Başka bir terim deneyin.",
      count:n=>n+" sonuç",close:"Aramayı kapat",location:"Konu"},
    en:{label:"Search all lesson content",placeholder:"Search topics or concepts…",hint:"Search all narrative topics in lessons 02–06.",
      short:"Enter at least 2 characters.",none:"No matching topics. Try another term.",
      count:n=>n+" results",close:"Close search",location:"Topic"}
  };
  function setup({getLessons,getLanguage,onSelect}) {
    const button=document.getElementById("course-search-toggle"),
      panel=document.getElementById("course-search-panel"),
      input=document.getElementById("course-search-input"),
      results=document.getElementById("course-search-results"),
      closeButton=document.getElementById("course-search-close");
    if(!button||!panel||!input||!results)return null;
    let hits=[];
    const lang=()=>getLanguage()==="en"?"en":"tr";
    const close=(restoreFocus=false)=>{
      panel.hidden=true;button.setAttribute("aria-expanded","false");
      if(restoreFocus)button.focus();
    };
    const update=()=>{
      const l=words[lang()];
      button.setAttribute("aria-label",l.label);button.title=l.label;
      panel.setAttribute("aria-label",l.label);
      input.setAttribute("aria-label",l.label);input.placeholder=l.placeholder;
      closeButton.setAttribute("aria-label",l.close);closeButton.title=l.close;
      const q=input.value.trim();
      hits=search(buildIndex(getLessons()),q);
      const message=q.length<2?(q?l.short:l.hint):hits.length?l.count(hits.length):l.none;
      const items=hits.map((hit,i)=>'<button type="button" class="course-search-result" data-search-result="'+i+'">'+
        '<span class="course-search-path">'+escape(hit.lessonTitle)+' · '+escape(l.location)+' '+(hit.topicIndex+1)+'</span>'+
        '<strong>'+escape(hit.title)+'</strong><small>'+escape(hit.snippet)+'</small></button>').join("");
      results.innerHTML='<p class="course-search-message" role="status">'+escape(message)+'</p>'+items;
    };
    button.addEventListener("click",()=>{
      if(!panel.hidden){close();return;}
      panel.hidden=false;button.setAttribute("aria-expanded","true");update();
      input.focus();
    });
    closeButton.addEventListener("click",()=>close(true));
    input.addEventListener("input",update);
    input.addEventListener("keydown",event=>{
      if(event.key==="Escape"){event.preventDefault();close(true);}
      else if(event.key==="ArrowDown"){
        const first=results.querySelector("[data-search-result]");
        if(first){event.preventDefault();first.focus();}
      }else if(event.key==="Enter"&&hits.length) {
        event.preventDefault();const selected=hits[0];close();
        onSelect(selected.lessonId,selected.topicIndex,input.value.trim());
      }
    });
    results.addEventListener("keydown",event=>{
      if(event.key==="Escape"){event.preventDefault();close(true);return;}
      if(!["ArrowDown","ArrowUp"].includes(event.key))return;
      const buttons=[...results.querySelectorAll("[data-search-result]")];
      const idx=buttons.indexOf(document.activeElement);
      if(idx<0)return;
      event.preventDefault();
      if(event.key==="ArrowUp"&&idx===0)input.focus();
      else buttons[(idx+(event.key==="ArrowDown"?1:-1)+buttons.length)%buttons.length].focus();
    });
    results.addEventListener("click",event=>{
      const selected=event.target.closest("[data-search-result]");
      if(!selected)return;
      const hit=hits[Number(selected.dataset.searchResult)];
      if(!hit)return;
      close();onSelect(hit.lessonId,hit.topicIndex,input.value.trim());
    });
    document.addEventListener("pointerdown",event=>{
      if(!panel.hidden&&!panel.contains(event.target)&&!button.contains(event.target))close();
    });
    document.addEventListener("keydown",event=>{
      if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==="k"){
        event.preventDefault();if(panel.hidden){button.click();}else input.focus();return;
      }
      if(event.key==="Escape"&&!panel.hidden){close(true);}
    });
    update();
    return {refresh:update,close};
  }
  window.CourseSearch={normalize,plain,buildIndex,search,highlightTopic,setup};
})();