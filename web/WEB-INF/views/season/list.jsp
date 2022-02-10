<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>season</title>
    <link rel="stylesheet" href="/res/css/season/list.css">
</head>
<body>
    <div class="container">
        <div>
            <ul id="season-tab" class="tabs">
                <li class="tab-link current" data-tab="tab-0" name="s_season" value="0">사계절</li>
                <li class="tab-link" data-tab="tab-1" name="s_spring" value="1">봄</li>
                <li class="tab-link" data-tab="tab-2" name="s_summer" value="2">여름</li>
                <li class="tab-link" data-tab="tab-3" name="s_fail" value="3">가을</li>
                <li class="tab-link" data-tab="tab-4" name="s_winter" value="4">겨울</li>
            </ul>

            <div id="tab-0" class="tab-content current">내용0</div>
            <div id="tab-1" class="tab-content">내용1</div>
            <div id="tab-2" class="tab-content">내용2</div>
            <div id="tab-3" class="tab-content">내용3</div>
            <div id="tab-4" class="tab-content">내용4</div>

            <table id="seasonListTable">
                <c:forEach items="${requestScope.list}" var="item" varStatus="status">
                    <tr>
                        <td>${status.count}</td>
                        <td>${item.f_nm}</td>
                    </tr>
                </c:forEach>
            </table>
        </div>

        <div id="page_container">
            <nav class="page">
                <ul class="pagination justify-content-center"></ul>
            </nav>
        </div>
    </div>
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
    <script src="/res/js/index.js"></script>
    <script src="/res/js/season/season.js"></script>
</body>
</html>

