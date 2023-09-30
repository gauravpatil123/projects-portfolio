import { get_link_url, section_expand } from "../utils.js";

var fig1_caption = "Fig #1: <i>Example Network Graph (GOT TV-Series Season 6</i>";
var objective_text = "<i>Network Visualizations of - The Game of Thrones</i> is an data visualization project consisting of a collection of several network visualizations showing the relationships between the characters of the fictional TV & Book series. The objective of this project is to experiment with, practice & apply data cleaning, munging & ETL techniques. This is just a fun fan data visualization project.";

var concept_idea_text = "The tv series - <i>The Game of Thrones</i> & the book series - <i>A song of Ice and Fire</i>, are set on the fictional continents of Westeros and Essos. These series’ both contain several characters & story lines simultaneously progressing throughout the series. As a fan of the Game of Thrones series I wanted to visualize the interactions between the characters that take place in the series and compare it with the ones in the books. Further, I also wanted to visualize the major locations in the game of thrones world where interaction between the characters happens through the series via map-hypergraph.";
var fig2_caption = "Fig #2: <i>Example Map HyperGraph (GOT TV-Series Season 6)</i>"

var datasets_text1 = "The primary base dataset was taken from the <i>networkofthrones</i> website, and I have constructed several datasets for different applications for creating the visualizations. The various datasets fall in the following categories:";
var datasets_text2 = "<b><i>networkofthrones</i> datasets:</b> These are the individual datasets which map the interactions between the characters in each season of the tv series and each book, downloaded directly from their website."
var datasets_text3 = "<b>Cumulative datasets:</b> These datasets are constructed to have the cumulative interactions between the characters of the series’, these datasets grow incrementally along with the series’ progression.";
var datasets_text4 = "<b>Modularity datasets:</b> These are the edges & nodes datasets resulting from clustering algorithms (from Gephi) applied on the original <i>networkofthrones</i> dataset, these datasets contain the modularity data features along with the original data.";
var datasets_text5 = "<b>Hypergraph datasets:</b> These are the resulting edges & nodes datasets after applying several data transformations on the modularity datasets, these contain the data features for creating hypergraphs.";

var methodology_text1 = "The original dataset collection from <i>networkofthrones</i> have individual dataset of character interactions for each season and book volume. Visualizing these interactions is interesting in itself - in that it will show the changes in the interactions between the characters in each season or book volume as the series progresses, but I also wanted to visualize the total interactions the characters have had till the end of each series in the storys’ progression.";
var methodology_text2 = "In order to accomplish this cumulative interaction, it was necessary to create a collection of datasets which have these needed data points by joining the datasets of individual series and book volumes.";
var fig3_caption = "Fig #3: <i>Code Abstraction to Create Cumulative Datasets</i>"
var methodology_text3 = "I used python to automate this process and create the csv files for the cumulative datasets (D1,  D1 + D2, D1 + D2 + D3 …..) which have summations of data points from individual datasets. Here the number signifies the season or book number. The code is pushed into the project repository for reference.";
var methodology_text4 = "In order to create clusters, I loaded the datasets for individual seasons and book volumes as well as the constructed cumulative datasets in Gephi. I used the inbuilt clustering and modularity algorithms in Gephi to cluster the datasets and add modularity data features into the loaded datasets.";
var fig4_caption = "Fig #4: <i>Example - Modularity Dataset (GOT TV-Series Season 1)</i>";
var methodology_text5 = "Once the modularity data features were added into the loaded dataset, the next step was to extract these features to create hypergraph datasets. I decided to use individual series’ dataset to be transformed into hypergraphs, since the final objective was to visualize the progression of interactions in the series on the fictional map of game of thrones.";
var fig5_6_caption = "Fig #5 & #6: <i>Example HyperGraph Edges & Nodes Datasets</i>"
var methodology_text6 = "To build the hypergraphs edges data, I needed to extract the values of the class id’s of the source and target nodes and replace it with the source and target id in the modularity dataset. Once this was accomplished, I also needed to build the hypergraph nodes dataset which consisted of the cumulative sum of the frequency of the cluster classes.";
var fig7_caption = "Fig #7: <i>Screenshot of Code to Create the HyperGraph Datasets</i>";
var methodology_text7 = "I used python to automate this process and create the edges and nodes dataset collection for the hypergraphs. The full code is pushed into the project repository for reference.";

function main() {

    section_expand();

    $("#fig1-caption").html(fig1_caption);

    $("#objective-text").html(objective_text);

    $("#concept-idea-text").html(concept_idea_text);

    $("#fig2-caption").html(fig2_caption);

    $("#datasets-text1").html(datasets_text1);

    $("#datasets-text2").html(datasets_text2);

    $("#datasets-text3").html(datasets_text3);

    $("#datasets-text4").html(datasets_text4);

    $("#datasets-text5").html(datasets_text5);

    $("#methodology-text1").html(methodology_text1);

    $("#methodology-text2").html(methodology_text2);

    $("#fig3-caption").html(fig3_caption);

    $("#methodology-text3").html(methodology_text3);

    $("#methodology-text4").html(methodology_text4);

    $("#fig4-caption").html(fig4_caption);

    $("#methodology-text5").html(methodology_text5);

    $("#fig5-6-caption").html(fig5_6_caption);

    $("#methodology-text6").html(methodology_text6);

    $("#fig7-caption").html(fig7_caption);

    $("#methodology-text7").html(methodology_text7);

}

main();