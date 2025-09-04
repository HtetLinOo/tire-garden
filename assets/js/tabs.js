// News section tab functionality
class NewsTabs {
    constructor(container) {
        this.container = container;
        this.areaTabs = container.querySelectorAll('[data-module="area-tab"]');
        this.prefTabsContainer = container.querySelector('.prefecture-tabs');
        this.newsList = container.querySelector('.news-list');
        this.init();
    }

    init() {
        // Set initial state
        if (this.areaTabs.length > 0) {
            this.onAreaTabClick(this.areaTabs[0]);
        }
        this.bindEvents();
    }

    bindEvents() {
        this.areaTabs.forEach(tab => {
            tab.addEventListener('click', () => this.onAreaTabClick(tab));
        });
    }

    onAreaTabClick(clickedTab) {
        // Update area tab states
        this.areaTabs.forEach(tab => tab.classList.remove('active'));
        clickedTab.classList.add('active');

        // Get and update prefecture tabs
        const prefectures = clickedTab.dataset.prefectures.split(',');
        this.updatePrefectureTabs(prefectures);

        // Update news list with first prefecture
        if (prefectures.length > 0) {
            this.updateNewsList(prefectures[0]);
        }
    }

    updatePrefectureTabs(prefectures) {
        const tabsHtml = prefectures.map(prefecture => 
            `<button class="prefecture-tab" data-prefecture="${prefecture}">${prefecture}</button>`
        ).join('');
        
        this.prefTabsContainer.innerHTML = tabsHtml;
        
        const newPrefTabs = this.prefTabsContainer.querySelectorAll('.prefecture-tab');
        newPrefTabs.forEach(tab => {
            tab.addEventListener('click', () => this.onPrefectureTabClick(tab));
        });
        
        if (newPrefTabs.length > 0) {
            newPrefTabs[0].classList.add('active');
        }
    }

    onPrefectureTabClick(clickedTab) {
        const prefTabs = this.prefTabsContainer.querySelectorAll('.prefecture-tab');
        prefTabs.forEach(tab => tab.classList.remove('active'));
        clickedTab.classList.add('active');

        const prefecture = clickedTab.dataset.prefecture;
        this.updateNewsList(prefecture);
    }

    updateNewsList(prefecture) {
        // Get news items for the selected prefecture
        const newsItems = this.container.querySelectorAll(`[data-prefecture="${prefecture}"]`);
        
        if (newsItems.length === 0) {
            this.newsList.innerHTML = '<div class="no-news">この地域のニュースはありません。</div>';
            return;
        }

        this.newsList.innerHTML = Array.from(newsItems).map(item => {
            const date = item.dataset.date;
            const isNew = item.hasAttribute('data-is-new');
            const title = item.dataset.title;
            const shop = item.dataset.shop;

            return `
                <article class="news-item">
                    <time class="news-date">${date}</time>
                    ${isNew ? '<span class="news-badge">NEW</span>' : ''}
                    <a href="#" class="news-link">
                        <h3 class="news-item-ttl">${title}</h3>
                        <p class="shop-name">${shop}</p>
                        <span class="more-info">お得な情報 ›</span>
                    </a>
                </article>
            `;
        }).join('');
        }).join('');

        this.newsList.innerHTML = newsHtml;
    }
}
                </a>
            </article>
        `).join('');
    }
};

function initTabs() {
    newsModule.init();
}
