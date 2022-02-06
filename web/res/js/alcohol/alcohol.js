{
    $(document).ready(function () {

        $('ul.tabs li').click(function () {
            var Atab_id = $(this).attr('data-tab');

            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#" + Atab_id).addClass('current');
        });
    });
}
    const alcoholLiElem = document.querySelectorAll('#alcohol-tab li');
    const alcoholListTableElem = document.querySelector('#alcoholListTable');

        alcoholLiElem.forEach(item => {
        item.addEventListener('click', () => {
            let num = 1;
            console.log(item.value);
            myFetch.get(`/ajax/alcohol/${item.value}`, (data) => {
                alcoholListTableElem.innerHTML = null;
                data.forEach(item => {
                    const trElem = document.createElement('tr');
                    alcoholListTableElem.appendChild(trElem);
                    trElem.innerHTML =
                        `
                            <td>${num++}</td>
                            <td>${item.f_worlddiv}</td>
                        `;
                });
            });
        });
    });