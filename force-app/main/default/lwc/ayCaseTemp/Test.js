AND(
  ISBLANK(Description),
  OR(
    AND(
      ISPICKVAL(AY_SubCategory__c, "COVID19 - Vaccinations"),
      NOT(
        INCLUDES(
          Case_Reason_Additional_Details__c,
          "COVID19 - Vaccination Clinics"
        )
      )
    ),
    AND(
      CONTAINS(Record_Type_Name__c, "Access"),
      OR(
        AND(
          OR(
            NOT(ISPICKVAL(Role_1_Action__c, "Transferred to Province")),
            NOT(ISPICKVAL(Role_1_Action__c, "Call Disconnected"))
          ),
          OR(
            ISPICKVAL(Role_1_Action__c, "Invalid Consent Received"),
            OR(
              ISPICKVAL(
                Role_3_Action__c,
                "Deemed Ineligible - Based on Application Documentation Submitted"
              ),
              ISPICKVAL(
                Role_1_Action__c,
                "Transferred to Claims - Roads Notified"
              ),
              ISPICKVAL(Role_1_Action__c, "Transferred to ENV Program Area"),
              ISPICKVAL(
                Role_1_Action__c,
                "Call Back Requested for Permit Inquiry"
              ),
              ISPICKVAL(AY_SubCategory__c, "Funding for Non-Profits"),
              ISPICKVAL(
                AY_SubCategory__c,
                "Personal Health Information Protection Act"
              ),
              ISPICKVAL(AY_SubCategory__c, "Groundwater"),
              ISPICKVAL(
                AY_SubCategory__c,
                "Student Water Conservation Programs"
              ),
              ISPICKVAL(
                AY_SubCategory__c,
                "Drinking Water Source Protection (WR)"
              ),
              AND(
                Not(ISPICKVAL(Role_1_Action__c, "Valid Consent Received")),
                ISPICKVAL(Role_1_Action__c, "Invalid Consent Received"),
                ISPICKVAL(AY_SubCategory__c, "Consents")
              ),

              ISPICKVAL(AY_SubCategory__c, "Home Now Program"),
              ISPICKVAL(AY_SubCategory__c, "Basement Flooding Risk Reduction")
            ),
            AND(
              OR(
                ISPICKVAL(AY_SubCategory__c, "ODSP Discretionary Benefits"),
                ISPICKVAL(AY_SubCategory__c, "Reportable Diseases"),
                ISPICKVAL(AY_SubCategory__c, "Unplanned Events"),
                ISPICKVAL(
                  AY_SubCategory__c,
                  "Public Electric Vehicle Charger Program"
                )
              ),
              OR(
                ISPICKVAL(Role_1_Action__c, "Consent Received"),
                ISPICKVAL(Role_1_Action__c, "Provided Information"),
                ISPICKVAL(Role_1_Action__c, "Transferred to Program Area"),
                ISPICKVAL(Role_1_Action__c, "Transferred to Vendor"),
                ISPICKVAL(Role_1_Action__c, "Transferred to Unplanned Events")
              )
            ),

            AND(
              ISPICKVAL(Role_1_Action__c, "Call Back Requested"),
              OR(
                ISPICKVAL(AY_SubCategory__c, "Rent & Utility Assistance"),
                ISPICKVAL(AY_SubCategory__c, "Applying for OW"),
                ISPICKVAL(AY_SubCategory__c, "Transit Assistance Program"),
                ISPICKVAL(
                  AY_SubCategory__c,
                  "YRT/VIVA Mobility Plus Eligibility Appeal"
                ),
                ISPICKVAL(AY_SubCategory__c, "Non-Social Assistance Recipients")
              )
            ),

            AND(
              ISPICKVAL(Branch__c, "Regional Clerk"),
              NOT(ISPICKVAL(AY_SubCategory__c, "Deputations")),
              NOT(ISPICKVAL(AY_SubCategory__c, "Expropriations")),

              NOT(
                AND(
                  ISPICKVAL(AY_SubCategory__c, "Committee Room Bookings"),
                  ISPICKVAL(Role_1_Action__c, "Provided Information")
                )
              )
            )
          )
        ),
        AND(
          ISPICKVAL(AY_SubCategory__c, "OW Payment, Benefit and Other Info"),
          OR(
            ISPICKVAL(
              Role_1_Action__c,
              "Unable to Provide Dental Authorization"
            ),
            ISPICKVAL(
              Role_1_Action__c,
              "Unable to Provide Denture Authorization"
            )
          )
        ),
        AND(
          ISPICKVAL(Category__c, "Garbage & Recycling"),
          NOT(ISPICKVAL(AY_SubCategory__c, "Litter Prevention")),
          NOT(ISPICKVAL(AY_SubCategory__c, "What happens to our garbage?")),
          OR(
            ISPICKVAL(Role_1_Action__c, "Transferred to Env Program Area"),
            ISPICKVAL(Role_1_Action__c, "Mail Out Requested")
          )
        ),
        INCLUDES(Case_Reason_Additional_Details__c, "Other"),
        ISPICKVAL(Warm_Transferred__c, "Yes")
      )
    ),
    AND(
      CONTAINS(Record_Type_Name__c, "PALs"),
      OR(
        ISPICKVAL(PALS_Sub_Category__c, "Groundwater"),
        ISPICKVAL(
          PALS_Sub_Category__c,
          "Drinking Water Source Protection (WR)"
        ),
        ISPICKVAL(PALS_Sub_Category__c, "Basement Flooding Risk Reduction")
      )
    )
  )
);
