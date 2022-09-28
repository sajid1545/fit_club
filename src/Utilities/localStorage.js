const addToDb = (value) => {
    localStorage.setItem('break-time', JSON.stringify(value))
    
};

const getStoredTime = () => {
    let breakTime;

    const storedTime = localStorage.getItem('break-time')
    if (storedTime) {
        breakTime = JSON.parse(storedTime)
    }
    return breakTime;
}

export {addToDb,getStoredTime}