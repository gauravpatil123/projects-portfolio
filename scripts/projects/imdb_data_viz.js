import { get_link_url } from "../utils.js";

var introduction_text = "IMDb is an online database containing various aspects of information related to films, tv series and other multimedia content types. In this project I have attempted to manipulate this huge database to create data art of large network graphs from the database. In this project I have had the opportunity to demonstrate & practice data ETL for a huge dataset. Further, in this project I have successfully created custom network graphs from the extracted data - details of which are mentioned in further sections.";

function main() {

    $("#introduction-text").html(introduction_text);

}

main();