let animation = bodymovin.loadAnimation({
    container: document.getElementById('animG'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json'
})