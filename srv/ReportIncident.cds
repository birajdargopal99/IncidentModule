using INC as INC from '../db/schema' ;

service Incident{
    entity IncidentDetails as select from INC.IncidentDetail;

    action insertIncident(XkXwXp4nCf5azs0U:String) returns String; 
} 