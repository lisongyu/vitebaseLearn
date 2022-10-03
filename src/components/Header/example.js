const start=()=>{
    let count=0;
    setInterval(()=>{
        // 给住县城传旨
        postMessage(++count);

    },2000)
}

start()