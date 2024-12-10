function makeCancelFunction(method, type) {
  return function (id) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, `http://localhost:3000/api/${type}/${id}`);
    xhr.send();
    let message = method === 'PUT' ? 'Cancelled' : 'Deleted';
    xhr.onload = () => alert((xhr.status === 204) ? `Successfully ${message}` : xhr.response);
  }
}

const cancelBooking = makeCancelFunction('PUT', 'bookings');
const deleteSchedule = makeCancelFunction('DELETE', 'schedules');