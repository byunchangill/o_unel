    let currentPage = 1; //현재 페이지
    let maxPage;
    const recordCount = 10; //레코드 수
    const pagingCount = 5; //페이징의 페이징 수

    const pageContainerElem = document.querySelector('#page_container');

    const seasonLiElem = document.querySelectorAll('#season-tab li');
    const seasonListTableElem = document.querySelector('#seasonListTable');

    $(document).ready(function () {

        $('ul.tabs li').click(function () {
            const tab_id = $(this).attr('data-tab');

            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        });
    });
       // 리스트 정보 가져오기
        const getSeasonList = (season) => {
            let num = 1;
            myFetch.get(`/ajax/season/${season}`, (data) => {
                seasonListTableElem.innerHTML = null;
                data.forEach(item => {
                    const trElem = document.createElement('tr');
                    seasonListTableElem.appendChild(trElem);
                    trElem.innerHTML =
                        `
                            <td>${num++}</td>
                            <td>${item.f_nm}</td>
                        `;

                });
                maxPage = data.result;
                makePaging(season);
            }, {currentPage, recordCount});
        }
        getSeasonList(0);

        //마지막 페이지 값 (once)

        const getMaxPageVal = () => {
            seasonLiElem.forEach(item => {
                item.addEventListener('click', () => {

                    currentPage=1;
                    getSeasonList(item.value);

/*                    let num = 1;
                    myFetch.get(`/ajax/season/${item.value}`, (data) => {
                        seasonListTableElem.innerHTML = null;
                        data.forEach(item => {
                            const trElem = document.createElement('tr');
                            seasonListTableElem.appendChild(trElem);
                            trElem.innerHTML =
                                `
                            <td>${num++}</td>
                            <td>${item.f_nm}</td>
                        `;
                            console.log(data.result);
                            maxPage = data.result;
                            makePaging();
                        });
                    }, { value, recordCount});
*/


                });
            });
        }
        getMaxPageVal();

        const makePaging = (season) => {
            const ulElem = pageContainerElem.querySelector('nav > ul')
            ulElem.innerHTML = null;

            const calcPage = parseInt((currentPage - 1) / pagingCount);
            const startPage = (calcPage * pagingCount) + 1;
            const lastPage = (calcPage + 1) * pagingCount;

            if (startPage > 1) {
                const liElem = document.createElement('li');
                ulElem.appendChild(liElem);

                liElem.className = 'page-item page-link pointer';
                liElem.innerHTML = '&lt;';
                liElem.addEventListener('click', e => {
                    currentPage = startPage - 1;
                    getSeasonList(season);
                    makePaging(season);
                })
            }

            for (let i = startPage; i <= (lastPage > maxPage ? maxPage : lastPage); i++) {
                const liElem = document.createElement('li');
                ulElem.appendChild(liElem);

                liElem.className = 'page-item page-link pointer';
                liElem.innerText = i;
                liElem.addEventListener('click', e => {
                    if(currentPage !== i) {
                        currentPage = i;
                        getSeasonList(season);
                    }
                });
            }

            if (maxPage > lastPage) {
                const liElem = document.createElement('li');
                ulElem.appendChild(liElem);

                liElem.className = 'page-item page-link pointer';
                liElem.innerHTML = '&gt;';
                liElem.addEventListener('click', e => {
                    currentPage = lastPage + 1;
                    getSeasonList(season);
                    makePaging(season);
                });
            }
        }

