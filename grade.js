var unEvaluated;
var numOfUnEvaluated = $('.gridtable tr:contains("未评教")').length;
console.log(numOfUnEvaluated)

function autoEvaluateSingle() {
    setRadioBox();
    writeEvaluation();
    setTimeout(function(){
        $('#btnSave').click();
    }, 1000);
}

function setRadioBox(params) {
    $(".gridtable input[value=4]").attr("checked",true); // for previous six box
    $("#op_135_133").attr("checked",true); // for the last one (although i do not know why)
}

function writeEvaluation() {
    writeForFirst();
    writeForSecond();
    writeForThird();
}

function writeForFirst() {
    const val = "教师上课内容翔实，认真负责，课程难度适中，为我们开拓了全新视野。";
    $('textarea[name="textEvaluateQuestion1"]').val(val)
}

function writeForSecond() {
    const val = "课程设置较为合理，暂时没有值得改进的地方。";
    $("textarea[name='textEvaluateQuestion2']").val(val);
}

function writeForThird() {
    const val = "好好学习，认真听讲。";
    $("textarea[name='textEvaluateQuestion3']").val(val);
}

function main() {
    autoEvaluateSingle()
}

main();