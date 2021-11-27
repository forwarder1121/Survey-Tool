
const shared = {
    updateData(key, value, selectedIndex) {
        console.log("update" + key);
        let newData = [...data]; 
        newData[selectedIndex][key] = value;
        setData(newData);
    }
}