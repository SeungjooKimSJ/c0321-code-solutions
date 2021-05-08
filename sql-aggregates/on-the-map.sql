select "countries"."name" as "country",
count("cities"."cityId") as "countCity"
from "countries"
join "cities" using ("countryId")
group by "countries"."name";
