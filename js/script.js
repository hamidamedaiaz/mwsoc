document.addEventListener('DOMContentLoaded', function() {
    
    const burgerMenu = document.getElementById('burgerMenu');
    const overlay = document.getElementById('overlay');
    const mobileMenu = document.getElementById('mobileMenu');
    
    let isMenuOpen = false;
    
    burgerMenu.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);
    
    function toggleMenu() {
        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }
    
    function openMenu() {
        console.log('Ouverture du menu...');
        
        overlay.classList.add('active');
        burgerMenu.classList.add('active');
        mobileMenu.classList.add('active');
        
        isMenuOpen = true;
    }
    
    function closeMenu() {
        console.log('Fermeture du menu...');
        
        overlay.classList.remove('active');
        burgerMenu.classList.remove('active');
        mobileMenu.classList.remove('active');
        
        isMenuOpen = false;
    }
   
    
    console.log('Lab 1 - Menu Responsive chargé avec succès !');
});