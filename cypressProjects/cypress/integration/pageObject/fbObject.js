class facebook{
    visit(){
        cy.visit("https://web.facebook.com/")
       
    }
    fillEmail(value){
        var email = cy.get("#email")
        email.clear()
        email.type(value)            

    }
    fillPassword(value){
        var pass = cy.get("#pass")
        pass.clear()
        pass.type(value) 
    }
    loginButton(){
        cy.get("#u_0_b").click({force : true})

    }
    logout(){
        cy
          .get("#mount_0_0 > div > div > div:nth-child(2) > div.n7fi1qx3.hv4rvrfc.b3onmgus.poy2od1o.kr520xx4.ehxjyohh > div.bp9cbjyn.j83agx80.byvelhso.l9j0dhe7.du4w35lb > span > div > div.oajrlxb2.tdjehn4e.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.j83agx80.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.l9j0dhe7.abiwlrkh.p8dawk7l.bp9cbjyn.s45kfl79.emlxlaya.bkmhp75w.spb7xbtv.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.taijpn5t.qypqp5cg.q676j6op > img")
          .as('out')
          .click()
        cy.wait(5000)
        cy 
          .get('@out')
          .click() 
                
    }
    create(){
        cy.get("#mount_0_0 > div > div > div:nth-child(2) > div.n7fi1qx3.hv4rvrfc.b3onmgus.poy2od1o.kr520xx4.ehxjyohh > div.bp9cbjyn.j83agx80.byvelhso.l9j0dhe7.du4w35lb > div:nth-child(2) > span > div > img").click()
        cy.wait(5000)    
                 
    }
    post(){
        cy.get("#mount_0_0 > div > div > div:nth-child(2) > div.n7fi1qx3.hv4rvrfc.b3onmgus.poy2od1o.kr520xx4.ehxjyohh > div:nth-child(2) > div > div > div.j34wkznp.qp9yad78.pmk7jnqg.kr520xx4 > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div > div > div > div.ecm0bbzt.rz4wbd8a.sj5x9vvc.a8nywdso > div:nth-child(1) > div > div.ow4ym5g4.auili1gw.rq0escxv.j83agx80.buofh1pr.g5gj957u.i1fnvgqd.oygrvhab.cxmmr5t8.hcukyx3x.kvgmc6g5.nnctdnn4.hpfvmrgz.qt6c0cv9.jb3vyjys.l9j0dhe7.du4w35lb.bp9cbjyn.btwxx1t3.dflh9lhu.scb9dxdr > div.nqmvxvec.j83agx80.cbu4d94t.bi6gxh9e.tvfksri0.aov4n071.l9j0dhe7 > div > img").click({force : true})
        cy.wait(5000)
    }
    writePost(value){
        var po =  cy.get("div.rq0escxv.buofh1pr.df2bnetk.hv4rvrfc.dati1w0a.l9j0dhe7.k4urcfbm.du4w35lb.o0xt3n8b  div > div._5rpb > div > div > div > div > span")
       // po.clear()
        po.type(value)
        cy.wait(3000)
    }
    closePost(){
        cy.get("hu5pjgll m6k467ps sp_9LGGDWd8SIG_1_5x sx_40949a").click()
        cy.wait(3000)
    }
    addToPost(){
        cy.get("#toolbarLabel > div > span").click()
        cy.wait(3000)
       // cy.get("#jsc_c_1hc > div > div > span").click()
    }
    messanger(){
        cy.get(" div:nth-child(3) > span > div > div.oajrlxb2.tdjehn4e.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.j83agx80.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.l9j0dhe7.abiwlrkh.p8dawk7l.bp9cbjyn.s45kfl79.emlxlaya.bkmhp75w.spb7xbtv.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.taijpn5t.qypqp5cg.q676j6op").click()
        cy.wait(5000)
    }
    selectUser(){
        cy.get("#mount_0_0 > div > div > div:nth-child(2) > div.n7fi1qx3.hv4rvrfc.b3onmgus.poy2od1o.kr520xx4.ehxjyohh > div:nth-child(2) > div > div > div.j34wkznp.qp9yad78.pmk7jnqg.kr520xx4 > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div > div > div.kr520xx4.pedkr2u6.pmk7jnqg.j9ispegn.ms05siws.pnx7fd3z.b7h9ocf4 > div > div.q5bimw55.ofs802cu.dkue75c7.mb9wzai9.o8kakjsu.rpm2j7zs.k7i0oixp.gvuykj2m.j83agx80.cbu4d94t.ni8dbmo4.eg9m0zos.buofh1pr.l56l04vs.r57mb794.l9j0dhe7.kh7kg01d.c3g1iek1.k4xni2cv > div.a8s20v7p.k5wvi7nf.buofh1pr.pfnyh3mw.l9j0dhe7.du4w35lb > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div > a > div.ow4ym5g4.auili1gw.rq0escxv.j83agx80.buofh1pr.g5gj957u.i1fnvgqd.oygrvhab.cxmmr5t8.hcukyx3x.kvgmc6g5.nnctdnn4.hpfvmrgz.qt6c0cv9.jb3vyjys.l9j0dhe7.du4w35lb.bp9cbjyn.btwxx1t3.dflh9lhu.scb9dxdr > div.nqmvxvec.j83agx80.cbu4d94t.bi6gxh9e.tvfksri0.aov4n071.l9j0dhe7 > div > svg > g > image").click({force: true})
        cy.wait(10000)
    }
    sendMsg(value){
        cy.get("#mount_0_0 > div > div > div.poy2od1o.i09qtzwb.n7fi1qx3 > div.l9j0dhe7.fh5enmmv > div.l9j0dhe7.tkr6xdv7 > div.l9j0dhe7.du4w35lb > div > div > div.nred35xi.ue3kfks5.pw54ja7n.uo3d90p7.l82x9zwi.eu4i7hue.jq4qci2q.a3bd9o3v.ni8dbmo4.stjgntxs.gu00c43d.jbcpqwzg.fh5enmmv.kwja4m9d.la0exbxb > div > div > div > div.rj1gh0hx.buofh1pr.l9j0dhe7.du4w35lb > div > div.pfnyh3mw > form > div > div.j83agx80.l9j0dhe7.aovydwv3.ni8dbmo4.stjgntxs.nred35xi.n8tt0mok.hyh9befq > div.aovydwv3.j83agx80.buofh1pr.ni8dbmo4.cxgpxx05.sj5x9vvc.qio8uep8.l9j0dhe7 > div.orhb3f3m.h905i5nu.jinzq4gt.emzo65vh.dflh9lhu.e5nlhep0.ecm0bbzt.h4z51re5.gvyehdmr.mu0vl6fp.msuhji6j.iqy7zqfr.rj1gh0hx.cbu4d94t.buofh1pr.j83agx80.ni8dbmo4.ll8tlv6m.b3i9ofy5.oo9gr5id.flx89l3n.dpja2al7.hedjyaoh > div > div > div > div > div._5rpb > div > div > div > div").type(value,{force : true})
          
    }
}
export default facebook