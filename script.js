document.addEventListener('DOMContentLoaded', () => {
    const readButtons = document.querySelectorAll('button[wiki-url]');
    
    readButtons.forEach(button => {
        button.addEventListener('click', () => {
            const url = button.getAttribute('wiki-url');
            window.open(url, 'http://127.0.0.1:5500/gungnirwiki.html');
            window.open(url, 'http://127.0.0.1:5500/godofwarwiki.html');
            window.open(url, 'http://127.0.0.1:5500/gtawiki.html');
            window.open(url, 'http://127.0.0.1:5500/barnyardwiki.html');
            window.open(url, 'http://127.0.0.1:5500/shrekwiki.html');
            window.open(url, 'http://127.0.0.1:5500/mortalkombatwiki.html');
            window.open(url, 'http://127.0.0.1:5500/crashwki.html');
            window.open(url, 'http://127.0.0.1:5500/advancewars.html');
            window.open(url, 'http://127.0.0.1:5500/goldensun.html');
            window.open(url, 'http://127.0.0.1:5500/monkeyball.html');
            window.open(url, 'http://127.0.0.1:5500/zelda.html');
            window.open(url, 'http://127.0.0.1:5500/supermario.html');
        });
    });
});