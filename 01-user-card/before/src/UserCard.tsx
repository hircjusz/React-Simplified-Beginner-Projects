
type UserCardProps = {
  name: string
  age: number
  phoneNumber: string
  address: string
}

export default function UserCard({ name, age, phoneNumber, address }: UserCardProps) {
  return (
      <div className="card">
          <h2 className="name">{name}</h2>
          <div className="body">
              <div className="label">Age:</div>
              <div>{age}</div>
              <div className="label">Phone:</div>
              <div>{phoneNumber}</div>
              <div className="label">Address:</div>
              <div>{address}</div>
          </div>
      </div>
  )
}