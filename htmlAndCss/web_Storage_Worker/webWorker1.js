
onmessage = function(e){
  setTimeout(() => {
    postMessage(e.data)
  }, 2000);
}