document.addEventListener('DOMContentLoaded', function() {
    // Area tab functionality
    const areaTabs = document.querySelectorAll('.area-tab');
    const prefTabs = document.querySelectorAll('.pref-tab');
    const newsList = document.querySelector('.news-list');

    // Prefecture data mapping
    const prefecturesByArea = {
        kanto: ['東京都', '神奈川県', '埼玉県', '千葉県'],
        north: ['栃木県', '茨城県', '群馬県'],
        tohoku: ['宮城県', '福島県', '山形県', '岩手県', '青森県', '秋田県'],
        hokuriku: ['新潟県', '富山県', '石川県', '福井県', '長野県', '山梨県'],
        tokai: ['静岡県', '愛知県', '岐阜県', '三重県', '大阪府', '京都府']
    };

    // Sample news data (you would typically fetch this from a server)
    const newsData = {
        tokyo: [
            {
                date: '2024.08.08',
                isNew: true,
                title: 'ニュースタイトルニュースタイトルニュースタイトル',
                shop: 'タイヤガーデン 渋谷'
            },
            {
                date: '2024.08.08',
                isNew: false,
                title: 'ニュースタイトルニュースタイトルニュースタイトル',
                shop: 'タイヤガーデン 新宿'
            },
            {
                date: '2024.08.08',
                isNew: false,
                title: 'ニュースタイトルニュースタイトルニュースタイトル',
                shop: 'タイヤガーデン 池袋'
            }
        ]
    };

    // Function to update prefecture tabs
    function updatePrefectureTabs(area) {
        const prefectures = prefecturesByArea[area];
        const prefTabsContainer = document.querySelector('.prefecture-tabs');
        prefTabsContainer.innerHTML = prefectures.map((pref, index) => `
            <button class="pref-tab ${index === 0 ? 'active' : ''}">${pref}</button>
        `).join('');

        // Reattach event listeners to new prefecture tabs
        attachPrefTabListeners();
    }

    // Function to update news list
    function updateNewsList(prefecture) {
        const news = newsData[prefecture.toLowerCase()] || newsData.tokyo; // Fallback to Tokyo if no data
        newsList.innerHTML = news.map(item => `
            <article class="news-item">
                <time class="news-date">${item.date}</time>
                ${item.isNew ? '<span class="news-badge">NEW</span>' : ''}
                <a href="#" class="news-link">
                    <h3 class="news-item-ttl">${item.title}</h3>
                    <p class="shop-name">${item.shop}</p>
                    <span class="more-info">お得な情報 ›</span>
                </a>
            </article>
        `).join('');
    }

    // Function to attach event listeners to prefecture tabs
    function attachPrefTabListeners() {
        const newPrefTabs = document.querySelectorAll('.pref-tab');
        newPrefTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                newPrefTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                updateNewsList(this.textContent);
            });
        });
    }

    // Initialize area tab click events
    areaTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            areaTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const area = this.dataset.area;
            updatePrefectureTabs(area);
        });
    });

    // Initialize prefecture tab click events
    attachPrefTabListeners();
});
