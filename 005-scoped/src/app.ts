interface LabelleValue  {
    label: string
}

const printLabel = (labelledObj: LabelleValue) => {
    console.log('labelledObj.label :', labelledObj.label);
}


let myObj = {size: 10, label: 'Size 10 object'};

printLabel(myObj);


