{
    $(document).ready(function () {

        $('ul.tabs li').click(function () {
            var tab_id = $(this).attr('data-tab');

            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        });
    });
}

    const seasonLiElem = document.querySelectorAll('#season-tab li');
    const seasonListTableElem = document.querySelector('#seasonListTable');
    const pageCountElem = seasonListTableElem.querySelector("#pageCount");

    seasonLiElem.forEach(item => {
        item.addEventListener('click', () => {
            let num = 1;
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
                });
            });
        });
    });