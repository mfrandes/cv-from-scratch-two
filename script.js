function initSkillPage() {
$.ajax('skills.json').done(function(skills){
    var list=$('#skills-page ul');

    var result=skills.map(function(skill){
        var endorsedBy= skill.endorsedBy;
        if(endorsedBy){
            endorsedBy = `<span class="endorsed">-${skill.endorsements}-Endorsed By ${skill.endorsedBy}</span> `
        }
        else{
            endorsedBy = `<span class="endorsed">-${skill.endorsements}</span> `
        }
        return `<li>${skill.name.toUpperCase()} ${endorsedBy}</li>`
    })
    list.html(result);
})
}

function initMenu(){
    $('#header a').click(function(e){
        
        var page = e.target.getAttribute('data-page');
        $('.page-block').hide();
        $(`#${page}-page`).fadeIn();
    })
    
}
initSkillPage();
initMenu();
$(`#home-page`).show();