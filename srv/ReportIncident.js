const cds = require('@sap/cds');

module.exports = cds.service.impl(function(){

    this.on("insertIncident",async(req)=>{
    try{
    
    let result,returnobj;
    payload = req.data;
    oInput = JSON.parse(payload.XkXwXp4nCf5azs0U);
    const oIncidentDetails = oInput.IncidentDetails;
    console.log(oIncidentDetails);
    tx  = cds.transaction(req);  

    result = await tx.run(`CALL prCreateUpdateIncidentDeta(?,?,?,?)`,[oIncidentDetails.INCID,oIncidentDetails.INCDT,oIncidentDetails.INCTM,oIncidentDetails.INCLC]);
    console.log("this",result);

    returnobj = {
        "Success":"Incident added/updated successfully."
    }

    return JSON.stringify(returnobj);

    }catch(error){
    if(tx){
        await tx.rollback();
    }
    return req.error({
        code: 500,
        message : error.toString()
    });
    }
    })
})