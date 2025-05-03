
export const scheme = {
  singular: "Client",
  plural: "Clients",
  url: "/client",
  table: {
      headers: [
          { id: "id", label: "Id", type: "text"},
          { id: "name", label: "Name", type: "text"},
          { id: "email", label: "Email", type: "text"},
          { id: "phone", label: "Phone", type: "text"},
          { id: "status", label: "Status", type: "text"},
          { id: "updated_at", label: "Updated At", type: "text", alignment: "end"},
      ],
      actions: []
  }
}

export default scheme