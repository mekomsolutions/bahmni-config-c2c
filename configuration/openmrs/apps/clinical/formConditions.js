Bahmni.ConceptSet.FormConditions.rules = {
    'Blood Pressure' : function (formName, formFieldValues) {
        var bloodPressure = formFieldValues['Blood Pressure'];
        var regex = /\d/g;
        if (regex.test(bloodPressure)) {
            return {
                enable: ["Posture"]
            };
        } else {
            return {
                disable: ["Posture"]
            };
        }
    },
    'Diastolic Data' : function (formName, formFieldValues) {
        var diastolic = formFieldValues['Diastolic Data'];
        if (diastolic) {
            return {
                enable: ["Posture"]
            };
        } else {
            return {};
        }
    },
    'Systolic Data' : function (formName, formFieldValues) {
        var systolic = formFieldValues['Systolic Data'];
        if (systolic) {
            return {
                enable: ["Posture"]
            };
        } else {}
    },
    'C2C_Raison du décès':function(formName, formFieldValues) {
    	var conditions = {
    			show: [],
    			hide: []
    	};
    	var conditionConcept = formFieldValues['C2C_Raison du décès'];
    	if (conditionConcept == null){
    		conditions.hide.push("Raison du décès_Spécifier");
    	} else if (conditionConcept == "Autre"){
    		conditions.show.push("Raison du décès_Spécifier");
    	} else {
    		conditions.hide.push("Raison du décès_Spécifier");
    	}
    	return conditions;
    }
    
};
