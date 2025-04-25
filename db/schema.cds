// namespace INC;

context INC {
    @cds.persistence.exists
    entity IncidentDetail{
        key INCID : Integer;
            INCDT : Date;
            INCTM : Time;
            INCLC : String(500);
    }
}