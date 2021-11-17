
import * as React from 'react';
import { useHistory } from 'react-router';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';


const currentDate = '2021-11-15';
const schedulerData = [
  { startDate: '2021-11-15T09:45', endDate: '2021-11-15T11:00', title: 'Meeting' },
  { startDate: '2021-11-15T12:00', endDate: '2021-11-15T13:30', title: 'Appointment' },
];

export default () => (
  
  <>
  
  <Paper>
    
    <Scheduler
      data={schedulerData}
    >
      <ViewState
        currentDate={currentDate}
      />
      <DayView
        startDayHour={9}
        endDayHour={14}
      />
      <Appointments />
    </Scheduler>
  </Paper>
  </>
);
