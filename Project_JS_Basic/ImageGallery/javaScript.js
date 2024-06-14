//click
document.querySelectorAll('.thumbnail').forEach(function(thumbnail){
    thumbnail.addEventListener('click',function(e){
    const imgsrc = e.target.src;

    const thumbnail_Src = document.getElementById('large-image');
    thumbnail_Src.src = imgsrc;
    })
})

//hover
document.getElementById('large-image').addEventListener('mouseover',function(e){
    // console.log(e.target.src);
    if(e.target.src == 'http://127.0.0.1:5500/javascript/EventsJs/EventsTasks/amritsar.jpg'){
        let content = 'Amritsar, home to the stunning Golden Temple, is a spiritual and cultural hub in Punjab, India. Known as Harmandir Sahib, the Golden Temple attracts millions of pilgrims with its serene beauty and spiritual significance. Amritsar is also famous for the Jallianwala Bagh, a historic site commemorating the 1919 massacre. The vibrant Wagah Border ceremony showcases the patriotic fervor between India and Pakistan. Renowned for its rich Punjabi cuisine, the city offers delectable dishes like Amritsari Kulcha and Lassi.';
        const h4_tag = document.createElement('h4');
        h4_tag.append(content);

        const divText = document.querySelector('.text');
        divText.textContent = '';
        divText.appendChild(h4_tag);
    }
    else if(e.target.src == 'http://127.0.0.1:5500/javascript/EventsJs/EventsTasks/hawaMahal.jpg'){
        let content = 'Hawa Mahal, also known as the Palace of Winds, is an iconic landmark in Jaipur, India. Built in 1799 by Maharaja Sawai Pratap Singh, it features 953 small windows called jharokhas. Designed in the shape of Lord Krishna crown, it allows royal women to observe street festivals without being seen. The intricate latticework facilitates air circulation, providing a cooling effect. This pink sandstone structure exemplifies the rich architectural heritage of Rajasthan';
        const h4_tag = document.createElement('h4');
        h4_tag.append(content);

        const divText = document.querySelector('.text');
        divText.textContent = '';
        divText.appendChild(h4_tag);
    }
    else if(e.target.src == 'http://127.0.0.1:5500/javascript/EventsJs/EventsTasks/mountains.jpg'){
        let content = 'Majestic and serene, the mountains offer breathtaking views and a tranquil escape from the hustle and bustle of city life. Known for their natural beauty and adventure opportunities, they attract hikers, climbers, and nature lovers alike. The crisp, fresh air and stunning landscapes make them a perfect retreat. Rich in biodiversity, the mountain regions are home to diverse flora and fauna. Their peaks often covered in snow, create a picturesque scenery year-round.';
        const h4_tag = document.createElement('h4');
        h4_tag.append(content);

        const divText = document.querySelector('.text');
        divText.textContent = '';
        divText.appendChild(h4_tag);
    }
    else if(e.target.src == 'http://127.0.0.1:5500/javascript/EventsJs/EventsTasks/taj.jpg'){
        let content = 'The Taj Mahal, a UNESCO World Heritage Site, is one of the Seven Wonders of the World. Built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal, it symbolizes eternal love. This white marble mausoleum is renowned for its exquisite beauty and intricate carvings. Situated on the banks of the Yamuna River in Agra, it attracts millions of visitors annually. Its harmonious proportions and decorative elements showcase the pinnacle of Mughal architecture.';
        const h4_tag = document.createElement('h4');
        h4_tag.append(content);

        const divText = document.querySelector('.text');
        divText.textContent = '';
        divText.appendChild(h4_tag);
    }
})

//mouse out
document.querySelector('.large-image-container').addEventListener('mouseout',function(e){
    const text = document.querySelector('.text');
    text.textContent = '';
    // console.log(text.textContent);
})

//navigate
const images = ['amritsar.jpg','hawaMahal.jpg','mountains.jpg','taj.jpg'];

function showCurrentIndex(){
    const getImg = document.querySelector('#large-image');
    const curretscr = getImg.src.split('/').pop();
    return images.indexOf(curretscr);
}

function showNext(){
    const ind = showCurrentIndex();
    const move = (ind + 1) % images.length;
    updateValue(move)
}

function showPrevious(){
    const ind = showCurrentIndex();
    const move = (ind - 1 + images.length) % images.length;
    updateValue(move)
}

function updateValue(move){
    const getImg = document.querySelector('#large-image');
    getImg.src = images[move];  
}

document.addEventListener('keydown',function(e){  
    if(e.key == 'ArrowLeft')
    {
        showPrevious();
    }
    else if(e.key == 'ArrowRight')
    {
        showNext();
    }
})

// move through the buttons
// Select all filter buttons
const buttons = document.querySelectorAll('.filter-button');

// Select all images
const allImages = document.querySelectorAll('.thumbnail');

// Add click event listeners to each button
buttons.forEach(function (btn) {
btn.addEventListener('click', function (e) {
const category = this.dataset.category;

allImages.forEach(function (img) {
    // If the category is 'all', show all images
    if (category === 'all') {
        img.style.display = 'block';
    } else {
        // Otherwise, show only the images that match the selected category
        if (img.dataset.category === category) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    }
});
});
});