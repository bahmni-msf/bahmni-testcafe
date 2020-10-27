import {
    Selector,
    t
} from 'testcafe'
import loginScreen from "../page-objects/pages/login.function";
import operationTheatrePage from "../page-objects/pages/ot.function";

const loginPage = new loginScreen()
const otPage = new operationTheatrePage()

fixture `Operation Theatre Automation Testing`
    .page `BASE_URL/bahmni/home/index.html#/login`
    .beforeEach(async () => {
        await loginPage.applicationLogin()
    })

test
("Cancel Surgical Blocks", async () => {
    await otPage.selectOtModule()
    await otPage.selectOtScheduling()
    await otPage.selectNewSurgicalBlock()
    await otPage.addSurgeionName()
    await otPage.addOTLocation()
    await otPage.enterStartDateTime()
    await otPage.enterEndDateTime()
    await otPage.cancelBlock()
});
test
("Create Surgical Blocks", async () => {
    await otPage.selectOtModule()
    await otPage.selectOtScheduling()
    await otPage.selectNewSurgicalBlock()
    await otPage.addSurgeionName()
    await otPage.addOTLocation()
    await otPage.enterStartDateTime()
    await otPage.enterEndDateTime()
    await otPage.saveBlock()
    await otPage.clickAddSurgeryButton()
    await otPage.enterDetailsForSurgicalAppointment()
});

filter testcases

test
("Verifying Filters Hide and Show", async () => {
    await otPage.selectOtModule()
    await otPage.selectOtScheduling()
    await otPage.showHideFilter()
})

test
("Filter based on Surgeon Name in Calender Day View", async () => {
    await otPage.selectOtModule()
    await otPage.selectOtScheduling()
    await otPage.surgicalFilterOnSurgeon()
})

test
("Filter based on Patient Name in Calender Day View", async () => {
    await otPage.selectOtModule()
    await otPage.selectOtScheduling()
    await otPage.surgicalFilterOnPatient()
})

test
("Filter based on Status in Calender Day View", async () => {
    await otPage.selectOtModule()
    await otPage.selectOtScheduling()
    await otPage.surgicalFilterOnStatus()
})
