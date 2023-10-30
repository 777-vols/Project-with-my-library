import { DayPicker, RangePicker } from "@vladislav_sss/modsen_date_picker";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <DayPicker
          form="week"
          title="Week Calendar"
          isWeekendsOn
          isWeekStartsOnMonday
          isClearButtonVisible={false}
          isRangeCalendarOpen={false}
          holidaysColor={"#cbffd7"}
          minDate={new Date(2022, 0, 1)}
          maxDate={new Date(2024, 11, 31)}
        />
      </div>
      <div>
        <DayPicker
          form="month"
          title="Month Calendar"
          isWeekendsOn
          isWeekStartsOnMonday
          isClearButtonVisible={false}
          isRangeCalendarOpen={false}
          holidaysColor={"#ffdddd"}
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 11, 31)}
        />
      </div>
      <div>
        <DayPicker
          form="year"
          title="Year Calendar"
          isWeekendsOn={false}
          isWeekStartsOnMonday={false}
          isClearButtonVisible={false}
          isRangeCalendarOpen={false}
          holidaysColor={"#fffc97"}
          minDate={new Date(2010, 0, 1)}
          maxDate={new Date(2030, 11, 31)}
        />
      </div>
      <div>
        <RangePicker
          form="week"
          minDate={new Date(2022, 0, 1)}
          maxDate={new Date(2024, 11, 31)}
          holidaysColor={"#97e0ff"}
          isClearButtonVisible
          isWeekStartsOnMonday
          isRangeCalendarOpen
          isWeekendsOn
          defaultRangeStartDate={new Date(2023, 9, 10)}
          defaultRangeEndDate={new Date(2023, 10, 8)}
        />
      </div>
      <div>
        <RangePicker
          form="month"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 11, 31)}
          holidaysColor={"#97e0ff"}
          isClearButtonVisible
          isWeekStartsOnMonday={false}
          isRangeCalendarOpen={false}
          isWeekendsOn
          defaultRangeStartDate={new Date(2023, 9, 10)}
          defaultRangeEndDate={new Date(2023, 10, 8)}
        />
      </div>
      <div>
        <RangePicker
          form="year"
          minDate={new Date(2010, 0, 1)}
          maxDate={new Date(2030, 11, 31)}
          holidaysColor={"#97e0ff"}
          isClearButtonVisible
          isWeekStartsOnMonday
          isRangeCalendarOpen
          isWeekendsOn
          defaultRangeStartDate={new Date(2023, 9, 10)}
          defaultRangeEndDate={new Date(2023, 10, 8)}
        />
      </div>
    </>
  );
}

export default App;
