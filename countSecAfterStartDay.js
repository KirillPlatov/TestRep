function getSecondsToday() {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diff = now - todayStart; 
    return Math.round(diff / 1000); 
}

console.log(getSecondsToday());