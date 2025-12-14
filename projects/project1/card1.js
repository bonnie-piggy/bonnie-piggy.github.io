document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.card');
            
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
                });
            });
        });