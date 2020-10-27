export default class TestData {
    constructor() {
        this.otBlockDetails =
            {
                ot_scheduling_button : 'OT Scheduling',
                surgical_welcome_note : 'You can block operation theatre time for a Surgeon and can arrange multiple surgeries into this block.',
                surgeon_name_one : 'George Chilinda',
                surgeon_name_two : 'MOH Surgeon',
                ot_location : 'OT1',
                start_date_time : '2020-07-17T08:30',
                end_date_time : '2020-07-17T10:30'
            }
        this.surgicalAppointmentDetails =
            {
                patient_id_surgical_appointment_one : 'MW100001',
                patient_id_surgical_appointment_two : 'MW100002',
                dropdown_selection_id : 'Patient One ( MW100001M )',
                procedure_surgical_appointment : 'Test Procedure',
                hour_est_time_field : '1',
                minute_est_time_field : '10',
                cleaning_time_in_minutes : '5',
                surgeon_name_surgical_appointment : 'Mr X Das',
                other_surgeon_surgical_appointment : '',
                notes_surgical_appointment : 'Testing',
                add_button_surgical_appointment : ''
            }
        this.appointmentScreen =
            {
                filter_heading : 'Operation Theatre',
                button_filter : 'Filter',
                filter_surgeon_name_one : 'George Chilinda',
                filter_sugeon_name_one_initials: 'Geo',
                filter_surgeon_name_two : 'MOH Surgeon',
                filter_sugeon_name_two_initials: "MOH",
                filter_surgeon_name_three : '',
                filter_surgeon_place_holder: 'Enter Surgeon Name',
                filter_patient_id_one : 'MW100001',
                filter_patient_id_two : 'MW100002',
                filter_status_of_appointment_completed : 'COMPLETED',
                filter_status_of_appointment_scheduled : 'SCHEDULED',
                filter_status_of_appointment_cancelled : 'CANCELLED',
                filter_status_of_appointment_postponed : 'POSTPONED',
                filter_status_place_holder: 'Enter Status',
                filter_apply : 'Apply Filter',
                filter_clear : 'Clear'

            }
    }
}


