import {
    Selector,
    t
} from 'testcafe'
import loginScreen from "./login.function";
import TestData from "../../testData/testData"
const data = new TestData();

class operationTheatrePage {
    constructor() {
        this.operationTheatreModule = Selector('#bahmni\\.ot')
        this.otModuleTab = Selector('.ot-scheduling-nav')
        this.otScheduling = Selector('.ot-scheduling-nav li:nth-child(2)')
        // surgical block //
        this.newSurgicalBlock = Selector('.back-btn').withText('New Surgical Block')
        this.surgicalBlockWelcomeNote = Selector('.new-surgical-appointment-note')
        this.surgeonName = Selector('.appointment-block p:nth-child(1)')
        this.surgeonOption = this.surgeonName.find('option')
        this.otLocationOption = Selector('label').withText(data.otBlockDetails.ot_location)
        //this.startDateTime = Selector('.appointment-block p:nth-child(3) span:nth-child(1) input')
        this.startDateTime = Selector('span.start-time').find('input')
        this.endDateTime = Selector('.appointment-block p:nth-child(3) span:nth-child(2) input')
        this.saveButton = Selector('.ot-nav-save')
        this.cancelSurgicalBlock = Selector('.ot-cancel-appoinment').withText('Cancel Block')
        this.addSurgeryButton = Selector('h4.create-surgical-title button')
        this.surgeryBlockDuration = Selector('section.new-surgical-appointment-step2 h5')
        // surgical appointment //
        this.surgicalAppEnterPatientID = Selector('#patientID')
        this.surgicalAppEnterPatientIDSelection = Selector('ul.ui-autocomplete li:nth-child(1) a').withText(data.surgicalAppointmentDetails.patient_id_surgical_appointment_one)
        this.surgicalAppEnterProcedure = Selector('#procedureID')
        this.surgicalAppEnterEstHour = Selector('#estTimeHoursID')
        this.surgicalAppEnterEstMinute = Selector('#estTimeMinutesID')
        this.surgicalAppEnterCleaningTimeMinute = Selector('#cleaningTimeID')
        //this.surgicalAppEnterSurgeonNameTextBox = Selector('div.appointment-block div:nth-child(5) input')
        this.surgicalAppEnterNotes = Selector('#notesID')
        this.surgicalAppEnterAddButton = Selector('.add')
        //
        this.surgicalAppBlock = Selector('p.surgicalblock-patientname').withText('MW100001')
        this.weekNavigation = Selector('p.day-btn-container label:nth-child(2)').withText('Week')

        //filter section
        this.otFilterSection = Selector('div.ot-filter-section')
        this.otFilterCollapse = Selector('div.ot-filter-section a i')
        this.otFilterExpand = Selector('p.calendar-day-navigation.filter-button button')
        this.otFilterHeading = Selector('div.ot-filter-items.location-block h4').withText(data.appointmentScreen.filter_heading)
        this.otFilterLocation = Selector('#OT\\ 1')
        this.filterSurgeonName = Selector('div.ot-filter-items.surgeon-block multi-select-autocomplete div tags-input div div input').withAttribute('placeholder', data.appointmentScreen.filter_surgeon_place_holder)
        this.confirmSurgeonName = Selector('li.suggestion-item.selected').withText(data.appointmentScreen.filter_surgeon_name_two)
        this.filterPatientName = Selector('#patient-ot-filter')
        this.confirmPatientName = Selector('#ui-id-1').withText(data.appointmentScreen.filter_patient_id_one)
        this.filterAppointmentStatusByCompleted = Selector('div.ot-filter-items.surgeon-block multi-select-autocomplete div tags-input div div input').withText(data.appointmentScreen.filter_status_of_appointment_completed)
        this.filterAppointmentStatusByScheduled = Selector('div.ot-filter-items.surgeon-block multi-select-autocomplete div tags-input div div input').withText(data.appointmentScreen.filter_status_of_appointment_scheduled)
        this.filterAppointmentStatusByCancelled = Selector('div.ot-filter-items.surgeon-block multi-select-autocomplete div tags-input div div input').withText(data.appointmentScreen.filter_status_of_appointment_cancelled)
        this.filterAppointmentStatusByPostponed = Selector('div.ot-filter-items.surgeon-block multi-select-autocomplete div tags-input div div input').withText(data.appointmentScreen.filter_status_of_appointment_postponed)
        this.clickApplyFilter = Selector('div.surgical-action-wrapper button:nth-child(1)').withText(data.appointmentScreen.filter_apply)
        this.clickResetFilter = Selector('div.surgical-action-wrapper button:nth-child(2)').withText(data.appointmentScreen.filter_clear)


    }
    async selectOtModule() {
        await t.click(this.operationTheatreModule)
        await t.expect(this.otModuleTab.innerText).contains(data.otBlockDetails.ot_scheduling_button)
    }
    async selectOtScheduling() {
        await t
            .click(this.otScheduling)

    }
    async selectNewSurgicalBlock() {
        await t
            .click(this.newSurgicalBlock)
            .expect(this.surgicalBlockWelcomeNote.innerText).contains(data.otBlockDetails.surgical_welcome_note)
    }
    async addSurgeionName() {
        await t
            .click(this.surgeonName)
            .click(this.surgeonOption.withText(data.otBlockDetails.surgeon_name_one))
    }
    async addOTLocation() {
        await t
            .click(this.otLocationOption)
    }
    async enterStartDateTime() {
        await t
            .typeText(this.startDateTime, data.otBlockDetails.start_date_time)
    }
    async enterEndDateTime() {
        await t
            .typeText(this.endDateTime, data.otBlockDetails.end_date_time)
    }
    async saveBlock() {
        await t
            .click(this.saveButton)
            .expect(this.cancelSurgicalBlock.exists).ok()
            .expect(this.addSurgeryButton.exists).ok()
            .expect(this.surgeryBlockDuration.innerText).contains('Remaining block duration')
    }
    async clickAddSurgeryButton() {
        await t
            .click(this.addSurgeryButton)
    }
    async enterDetailsForSurgicalAppointment() {
        await t
            .click(this.surgicalAppEnterPatientID)
            .typeText(this.surgicalAppEnterPatientID, data.surgicalAppointmentDetails.patient_id_surgical_appointment_one)
            .click(this.surgicalAppEnterPatientIDSelection)
            .typeText(this.surgicalAppEnterProcedure, data.surgicalAppointmentDetails.procedure_surgical_appointment, {
                paste: true,
                replace: true
            })
            .typeText(this.surgicalAppEnterEstHour, data.surgicalAppointmentDetails.hour_est_time_field, {
                paste: true,
                replace: true
            })
            .typeText(this.surgicalAppEnterEstMinute, data.surgicalAppointmentDetails.minute_est_time_field, {
                paste: true,
                replace: true
            })
            .typeText(this.surgicalAppEnterCleaningTimeMinute, data.surgicalAppointmentDetails.cleaning_time_in_minutes, {
                paste: true,
                replace: true
            })
            //.typeText(this.surgicalAppEnterSurgeonNameTextBox, data.surgicalAppointmentDetails.surgeon_name_surgical_appointment,{paste: true, replace: true})
            .typeText(this.surgicalAppEnterNotes, data.surgicalAppointmentDetails.notes_surgical_appointment, {
                paste: true,
                replace: true
            })
            .click(this.surgicalAppEnterAddButton)
            .click(this.saveButton)
            .wait(2000)
    }
    async cancelBlock() {
        await t
            .click(this.cancelSurgicalBlock)
    }
    async showHideFilter() {
        await t
            .click(this.otFilterCollapse)
            .click(this.otFilterExpand)
            .expect(this.otFilterHeading.innerText).contains(data.appointmentScreen.filter_heading)
    }
    async surgicalFilterOnSurgeon() {
        await t
            .typeText(this.filterSurgeonName, data.appointmentScreen.filter_sugeon_name_two_initials, {
                paste: true,
                replace: true
            })
            .click(this.confirmSurgeonName)
            .click(this.clickApplyFilter)
    }
    async surgicalFilterOnMultipleSurgeon(){
        await t
            .typeText(this.filterSurgeonName, data.otBlockDetails.surgeon_name_one, {
                paste: true,
                replace: true
            })
            .typeText(this.filterSurgeonName, data.otBlockDetails.surgeon_name_two, {
                paste: true,
                replace: true
            })
            .click(this.clickApplyFilter)
            .expect()
    }
    async surgicalFilterOnPatient() {
        await t
            .typeText(this.filterPatientName, data.appointmentScreen.filter_patient_id_one, {
                paste: true,
                replace: true
            })
            .click(this.confirmPatientName)
            .click(this.clickApplyFilter)
            .wait(2000)
    }
    async surgicalFilterOnStatus() {
        await t

    }
}
export default operationTheatrePage
