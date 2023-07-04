from pydantic import BaseModel

class OrderCreateSchema(BaseModel):
    client_id: str
    product_id: str

    class Config:
        schema_extra = {
            "example": {
                "client_id": "21",
                "product_id": "7",
            }
        }


class OrderUpdateSchema(BaseModel):
    client_id: str | None
    product_id: str | None

    class Config:
        schema_extra = {
            "example": {
                "client_id": "21",
                "product_id": "7",
            }
        }


class Order(OrderCreateSchema):
    id: int



# class StudentCreateSchema(BaseModel):
#     first_name: str
#     last_name: str

#     class Config:
#         schema_extra = {
#             "example": {
#                 "first_name": "Zbyszek",
#                 "last_name": "Kieliszek",
#             }
#         }


# class StudentUpdateSchema(BaseModel):
#     first_name: str | None
#     last_name: str | None

#     class Config:
#         schema_extra = {
#             "example": {
#                 "first_name": "Zbysiu",
#             }
#         }


# class Student(StudentCreateSchema):
#     id: int


# class Mark(float, Enum):
#     BARDZO_DOBRY = 5.0
#     DOBRY_PLUS = 4.5
#     DOBRY = 4.0
#     DOSTATECZNY_PLUS = 3.5
#     DOSTATECZNY = 3.0
#     NIEDOSTATECZNY = 2.0