// add class khi bam button o header
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('header-button-menu').addEventListener('click', function() {
        this.classList.toggle('pull-left');
    });
});

document.getElementById('header-button-menu').addEventListener('click', function() {
    document.getElementById('header-sidebar-menu').classList.toggle('sidebar-pull-left');
});


