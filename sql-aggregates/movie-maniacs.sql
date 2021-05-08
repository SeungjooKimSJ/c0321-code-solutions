select "customers"."firstName",
"customers"."lastName",
sum("payments"."amount") as "sumSpentAmount"
from "customers"
join "payments" using ("customerId")
group by "customers"."customerId"
order by "sumSpentAmount" desc;
