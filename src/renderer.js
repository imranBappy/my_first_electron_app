document.getElementById('start').addEventListener('click', async () => {
    const startBtn = document.getElementById('start');
    const value = document.getElementById('count');
    await window.autoMake.start(value.value ? Number(value.value) : 0)
    startBtn.innerText = 'okkk'
})