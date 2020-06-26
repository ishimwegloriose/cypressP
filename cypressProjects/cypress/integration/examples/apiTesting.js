describe('Test suit', ()=>{

    it('Request 1', ()=>{
        cy.request(
            {
                method:"POST",
                url : "https://reqres.in/api/users",
                header : {
                    "content-type" : "application/json"
                },
                body : {
                    
                        "name": "Gogo",
                        "job": "zion resident"                    
                }
            }
        ).then((response)=>{
           var jsonData = response.body;            
            expect(response.body.name).to.be.eq("Gogo");
            expect(jsonData.job).to.be.eq("zion resident");
            console.log(jsonData);
            expect(response.status).to.be.eq(200)
            
        })
    })
})