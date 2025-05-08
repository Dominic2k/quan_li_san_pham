// Call the dataTables jQuery plugin
jQuery(document).ready(function($) {
  $('#dataTable').DataTable({
    ajax: {
      url: 'http://localhost:3000/posts',
      dataSrc: ''
    },
    columns: [
      { data: 'id' },
      { data: 'title' },
      { data: 'author' }
    ],
    language: {
      url: '//cdn.datatables.net/plug-ins/1.10.24/i18n/Vietnamese.json'
    }
  });
});
