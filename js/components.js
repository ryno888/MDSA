/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
    $('.googleMaps').click(function(){
        window.open('https://goo.gl/maps/uSPkxgwogAr', '_blank');
    });
    
    generatEmail();
});

function generatEmail(){
    var email_part1 = "capemanager";
    var email_part2 = "mdsa";
    var email_part3 = "org.za";
    
    var emailWhole = email_part1+"@"+email_part2+'.'+email_part3;
    
    $('.email').attr('href', 'mailto:'+emailWhole);
    $('.email').html(emailWhole);
}