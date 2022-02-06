<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>season</title>
    <link rel="stylesheet" href="/res/css/alcohol/list.css">
</head>
<body>
<form action="/alcohol/list" method="get">
    <div class="container">
        <div>
            <ul id="alcohol-tab" class="tabs">
                <li class="tab-link current" data-tab="tab-0" value="0">전체</li>
                <li class="tab-link" data-tab="tab-1" value="1">소주</li>
                <li class="tab-link" data-tab="tab-2" value="2">맥주</li>
                <li class="tab-link" data-tab="tab-3" value="3">막걸리</li>
                <li class="tab-link" data-tab="tab-4" value="4">양주</li>
            </ul>

            <div id="tab-0" class="tab-content current">내용0</div>
            <div id="tab-1" class="tab-content">내용1</div>
            <div id="tab-2" class="tab-content">내용2</div>
            <div id="tab-3" class="tab-content">내용3</div>
            <div id="tab-4" class="tab-content">내용4</div>

            <table id="alcoholListTable">
                <c:forEach items="${requestScope.list}" var="item" varStatus="status">
                    <tr>
                        <td>${status.count}</td>
                        <td>${item.f_worlddiv}</td>
                    </tr>
                </c:forEach>
            </table>
        </div>
    </div>
</form>

<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
<script src="/res/js/alcohol/alcohol.js"></script>
<script src="/res/js/index.js"></script>
</body>
</html>

