const Login = [
    {
        userFile: 'TF355',
        name: 'Login',
        testCases: [
            {
                testCase: 'TC5108',
                name: 'Portal-->Login-->Correct Credentials',
                payload: {
                    username: 'hoolva@netstratum.com',
                    password: 'N3tstratum!@#',
                },
                userStory: {
                    description: '',
                    notes: '',
                    Objectives: 'Check whether able to login with correct user name and password',
                    preConditions: 'Navigate to ncs portal login page(https://us3-test.ncsapp.com/portal)',
                    validationInput: "Enter the correct user name and password   Hit on enter key   Username:-hoolva Password:-password",
                    validationExpectedResult: 'Able to login to the portal',
                    postConditions: '',
                    attachments: '',
                }
            }, {
                testCase: 'TC5109',
                name: 'Portal-->Login-->Wrong Credentials',
                payload: {
                    username: 'hoolva@netjhjstratum.com',
                    password: 'N3tstratum!@#',
                },
                userStory: {
                    description: '',
                    notes: '',
                    Objectives: 'Check whether not able to login with the wrong username and password',
                    preConditions: 'Navigate to the portal login page--https://us3-test.ncsapp.com/portal',
                    validationInput: 'Enter wrong username or wrong password                            Hit on enter key',
                    validationExpectedResult: 'Should display the error msg"Invalid username or password ',
                    postConditions: '',
                    attachments: '',
                }
            }
        ]

    }, {
        userFile: 'TF357',
        name: 'Tenant',
        testCases: [
            {
                testCase: 'TC5096',
                name: 'Portal-->Tenant-->Add New Tenant',
                userStory: {
                    description: '',
                    notes: '',
                    Objectives: 'Check whether able to add a new tenant by clicking on "Add new tenant" button',
                    preConditions: 'Login to the portal page with the correct credentials.Navigate to tenant tab and Click on add new tenant button',
                    validationInput: 'Fill up the mandatory fields and click on "Add" button',
                    validationExpectedResult: 'Newly created tenant will be displayed',
                    postConditions: '',
                    attachments: '',

                }
            }, {
                testCase: 'TC5097',
                name: 'Portal-->Tenant-->Edit a Tenant',
                userStory: {
                    description: '',
                    notes: '',
                    Objectives: 'check whether is it possible to edit a tenant.',
                    preConditions: 'Login to the portal page with the correct credentials. Click on tenant tab. Click the edit button of any tenant. Navigate to that tenant page.Click on Edit tenant                      ',
                    validationInput: 'Change any data which is already exist and Click on "Update tenant" button',
                    validationExpectedResult: 'Observe the success notification and edited data will be displayed',
                    postConditions: '',
                    attachments: '',

                }
            }, {
                testCase: 'TC5098',
                name: 'Portal-->Tenant-->Pagination',
                userStory: {
                    description: '',
                    notes: '',
                    Objectives: 'Check whether able to navigate to all pages of tenant',
                    preConditions: 'Login to the portal page with the correct credentials.Click on tenants tab',
                    validationInput: 'Click on page number 2 to last past page',
                    validationExpectedResult: 'While navigating to different pages, we must able to see the tenant data appropriately',
                    postConditions: '',
                    attachments: '',

                }
            }, , {
                testCase: 'TC5100',
                name: 'Portal-->Tenant-->User-->Add Users',
                userStory: {
                    description: '',
                    notes: '',
                    Objectives: 'Check whether able to add a new user to an existing tenant',
                    preConditions: 'Login to the portal page with the correct credentials.Navigate to tenant tab. Click on edit button.Click on add user',
                    validationInput: 'Enter all the mandatory fields on the add user pop up and Click on "Add" button',
                    validationExpectedResult: 'New user created sucess message and newly added user should be displayed under the user tab',
                    postConditions: '',
                    attachments: '',

                }
            }, {
                testCase: 'TC5101',
                name: 'Portal-->Tenant-->User-->Edit Users',
                userStory: {
                    description: '',
                    notes: '',
                    Objectives: 'Check whether able to edit an existing user',
                    preConditions: 'Login to the portal page with the correct credentials.Navigate to tenant tab. Click on edit.Click on edit tenant.Navigate to user tab.Click on the edit icon near by the user    ',
                    validationInput: 'Change any field of the user and click on "Update user" button',
                    validationExpectedResult: 'Success message with user details updated and display the updated data(Updated the name of the user on the attachment)',
                    postConditions: '',
                    attachments: '',
                }
            }, {
                testCase: 'TC5102',
                name: 'Portal-->Tenant-->User-->Delete Users',
                userStory: {
                    description: '',
                    notes: '',
                    Objectives: '',
                    preConditions: 'Login to the portal page with the correct credentials.Navigate to tenant tab.Click on edit.Click on edit tenant.Navigate to user tab.Click on the delete icon near by the user',
                    validationInput: 'Click on the delete button',
                    validationExpectedResult: 'Make sure you will get a pop up for asking the "Are you sure to delete ?".if click on  " Confirm " button user should be deleted and if click on "Cancel" button user should exist',
                    postConditions: '',
                    attachments: '',
                }
            }, {
                testCase: 'TC5105',
                name: 'Portal-->Tenant-->User-->Pagination',
                userStory: {
                    description: '',
                    notes: '',
                    Objectives: 'Check whether able to navigate to all pages of user',
                    preConditions: 'Login to the portal page with the correct credentials. Navigate to tenant tab. Click on edit.Click on edit tenant.Navigate to user tab',
                    validationInput: 'Click on page number 2 to last past page',
                    validationExpectedResult: 'While navigating to different pages, we must able to see the user data appropriately',
                    postConditions: '',
                    attachments: '',

                }
            }, {
                testCase: 'TC5106',
                name: 'Portal-->Tenant-->User-->Enable',
                userStory: {
                    description: '',
                    notes: '',
                    Objectives: 'Check whether able enable a user who is in disable state',
                    preConditions: 'Login to the portal page with the correct credentials. Navigate to tenant.Click on edit.Click on edit tenant.Navigate to user tab',
                    validationInput: 'Select the user to enable and click on the enable button',
                    validationExpectedResult: 'Able to login,Send and receive msgs and calls',
                    postConditions: '',
                    attachments: '',

                }
            }, {
                testCase: 'TC5107',
                name: 'Portal-->Tenant-->User-->Disable',
                userStory: {
                    description: '',
                    notes: '',
                    Objectives: 'Check whether able to disable a user who is on enable state',
                    preConditions: 'Login to the portal page with the correct credentials.Navigate to tenant tab.Click on edit.Click on edit tenant Navigate to user tab',
                    validationInput: 'Find out the user to disable and Click on the disable button',
                    validationExpectedResult: 'Not able to login the user who is in disable state and Others users not able to send msgs',
                    postConditions: '',
                    attachments: '',

                }
            }
        ]

    }, {
        userFile: 'TF358',
        name: 'servicePlan',
        testCases: [
            {
                testCase: 'TC5099',
                name: 'Portal-->ServicePlan-->Add New Plan',
                userStory: {
                    description: '',
                    notes: '',
                    Objectives: 'Verify whether the user can create a new plan by clicking on the add new plan button',
                    preConditions: 'Open portal and Login with valid credentials.Click on the service plan menu.click on the add new plan button Fill the mandatory fields 1)Plan name 2)Description(not mandatory) 3)Choose feature,Click on Add button',
                    validationInput: '',
                    validationExpectedResult: 'The user should be able to create a new plan by entering data in mandatory fields and by clicking on the add button',
                    postConditions: '',
                    attachments: '',
                }
            }, {
                testCase: 'TC5103',
                name: 'Portal-->ServicePlan-->Edit',
                userStory: {
                    description: '',
                    notes: '',
                    Objectives: 'Verify whether the user is able to edit the service plan by clicking on the edit menu in the table view ',
                    preConditions: 'open portal and Login with valid credential,click on the add new plan button.Add a new plan. Click on the edit button, Edit any of the data.Click on add button',
                    validationInput: '',
                    validationExpectedResult: 'The user should be able to edit the already created plan by clicking on the edit button  and by editing the fields in the edit pop up',
                    postConditions: '',
                    attachments: '',
                }
            }, {
                testCase: 'TC5104',
                name: 'Portal-->ServicePlan-->Delete',
                userStory: {
                    description: '',
                    notes: '',
                    Objectives: 'Verify whether the user is able to delete an already created plan which is not in use by clicking on the delete button and just confirming it',
                    preConditions: 'open portal and login with valid credentials,click on the service plan.click on the add new plan.Click on the delete button.click on the confirm button in the confirmation pop up',
                    validationInput: '',
                    validationExpectedResult: 'The user should be able to delete a plan which is not in use by clicking on the delete button and by confirming it.',
                    postConditions: '',
                    attachments: '',
                }
            }, {
                testCase: 'TC5111',
                name: 'Portal-->ServicePlan-->Search',
                userStory: {
                    description: '',
                    notes: '',
                    Objectives: 'Verify whether the user is able to search a particular plan ',
                    preConditions: 'Open portal and Login with valid credentials.click on service plan.click on the search bar.Type something on the search bar and check whether the user is getting data based on the searched keyword',
                    validationInput: '',
                    validationExpectedResult: 'The user should be able to search for a particular plan by using keyword',
                    postConditions: '',
                    attachments: '',
                }
            }, {
                testCase: 'TC5112',
                name: 'Portal-->ServicePlan-->Table View',
                userStory: {
                    description: '',
                    notes: '',
                    Objectives: 'Verify whether the plan added while creating a tenant is listing the service plan page or not',
                    preConditions: 'Open portal and Login with valid credentials.click on tenant menu.Click on add new tenant Fill the mandatory fields 1)Tenant name 2)Choose plan--->select the add new option  3)Enter the plan name 4)Choose the features and Click on add button, Check whether the plan created from tenant page is listed in the service plan page ',
                    validationInput: '',
                    validationExpectedResult: 'The  plan added while creating a tenant should list in  the service plan page ',
                    postConditions: '',
                    attachments: '',
                }
            }, {
                testCase: 'TC5113',
                name: 'Portal-->ServicePlan-->Delete Confirmation',
                userStory: {
                    description: '',
                    notes: '',
                    Objectives: 'Verify whether the user is getting a notification like " this plan is currently in use and cannot be deleted" once the user tries to delete the already in use plan.',
                    preConditions: 'Open portal and Login with valid credentials.click on service plan.Click on the delete button of a plan which is already in use',
                    validationInput: '',
                    validationExpectedResult: 'The user should get a notification like "this plan is currently in use and cannot be deleted" once the user tries to delete the already in use plan.',
                    postConditions: '',
                    attachments: '',
                }
            }
        ]

    }]

module.exports = {
    Login
}