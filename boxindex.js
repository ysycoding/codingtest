function paveBox(boxes) {
    let answer = [];
    
    
    while(boxes.length > 0){
        let finishIndex = boxes.findIndex(fn => boxes[0] < fn);
        
        if(finishIndex === -1){
           
            answer.push(boxes.length);
            boxes.splice(0, boxes.length);

        } else {
       
            answer.push(finishIndex);
            boxes.splice(0, finishIndex);
        }
    }

    return Math.max(...answer);
}