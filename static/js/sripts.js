// window.addEventListener('DOMContentLoaded', function() {
//     function setViewportScale() {
//       const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
//       let viewportTag = document.querySelector('meta[name="viewport"]');
//       let viewportContent = 'width=device-width, initial-scale=1.0';
  
//       if (screenWidth < 370) {
//         viewportContent = 'width=device-width, initial-scale=0.8'; // Измените значение 1.2 на желаемый масштаб
//       }
  
//       if (!viewportTag) {
//         viewportTag = document.createElement('meta');
//         viewportTag.setAttribute('name', 'viewport');
//         document.head.appendChild(viewportTag);
//       }
  
//       viewportTag.setAttribute('content', viewportContent);
//     }
  
//     setViewportScale();
  
//     window.addEventListener('resize', setViewportScale);
//   });
window.addEventListener('scroll', function() {
    var nav = document.querySelector('.navigation');
    if (window.pageYOffset > 0) {
      nav.classList.add('swipe');
    } else {
      nav.classList.remove('swipe');
    }
  });