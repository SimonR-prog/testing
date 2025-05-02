# Testing repo for our react frontend for group-assignment 




# Components: 


### EventCard:

Event card will change the image depending on the category. If category is not found then it will display an "image not found" image.

<img src="https://github.com/user-attachments/assets/c2477a47-4994-4ccc-9e40-13c5062e33f1" height="200">

Usage: 

<img src="https://github.com/user-attachments/assets/403aa4e9-b8a1-423c-b432-d963bae306b3" height="200">


```jsx
<div>
  {calendar_days.map((calendarDays, index) => ( <CalendarDayCard key={index} calendarDays={calendarDays} /> ))}
</div>
```



### PaidStatusCard:

Paid status card will change the little icon depening on the status. (Paid/Unpaid/Overdue)

<img src="https://github.com/user-attachments/assets/6bff10ae-97b9-4e61-bf67-9ca50f377629" width="500">

Usage: 

<img src="https://github.com/user-attachments/assets/f24bc4f3-6846-4aad-9583-99d2219fb268" height="200">


### CalendarDayCard

The color on the calendar days card will change depending on if the day is even or not. 

<img src="https://github.com/user-attachments/assets/422d2eb1-6570-478c-9e0b-2790da8b919d" height="200">

Usage: 

<img src="https://github.com/user-attachments/assets/163078b5-bff8-4f73-b15f-ce0a217551a4" height="200">
