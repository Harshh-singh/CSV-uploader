document.getElementById("btn").addEventListener("click",(function(e){e.preventDefault();const t=document.getElementById("searchbar").value.toLowerCase();console.log(t);const n=document.getElementsByTagName("tr");for(let e=0;e<n.length;e++){const o=n[e],l=o.textContent.toLowerCase();l.includes(t)?(o.classList.add("highlight"),console.log(l)):o.classList.remove("highlight")}}));