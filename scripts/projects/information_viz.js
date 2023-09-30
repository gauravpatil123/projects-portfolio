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

var network_graphs_text = "I created the network visualizations in the same steps when their respective required datasets were constructed. I used the original datasets to create the network graphs for each season of the series and book volume. I used the cumulative datasets to create the cumulative network graphs. I used Gephi and its inbuilt functionality to create these network visualizations.";
var fig8_caption = "Fig #8: <i>Season 1</i>"
var fig9_caption = "Fig #9: <i>Season 2</i>"
var fig10_caption = "Fig #10: <i>Season 3</i>"
var fig11_caption = "Fig #11: <i>Season 4</i>"
var fig12_caption = "Fig #12: <i>Season 5</i>"
var fig13_caption = "Fig #13: <i>Season 6</i>"
var fig14_caption = "Fig #14: <i>Season 7</i>"
var fig15_caption = "Fig #15: <i>Season 8</i>"
var fig8_15_caption = "Fig #8 to #15 (Scroll): <i>Network Graphs for TV-Series.</i>";
var fig16_caption = "Fig #16: <i>Volume 1</i>";
var fig17_caption = "Fig #17: <i>Volume 2</i>";
var fig18_caption = "Fig #18: <i>Volume 3</i>";
var fig19_caption = "Fig #19: <i>Volume 4</i>";
var fig20_caption = "Fig #20: <i>Volume 5</i>";
var fig16_20_caption = "Fig #16 to #20 (Scroll): <i>Network Graphs for Book-Series.</i>";
var fig21_caption = "Fig #21: <i>Season 1</i>";
var fig22_caption = "Fig #22: <i>Season 2</i>";
var fig23_caption = "Fig #23: <i>Season 3</i>";
var fig24_caption = "Fig #24: <i>Season 4</i>";
var fig25_caption = "Fig #25: <i>Season 5</i>";
var fig26_caption = "Fig #26: <i>Season 6</i>";
var fig27_caption = "Fig #27: <i>Season 7</i>";
var fig28_caption = "Fig #28: <i>Season 8</i>";
var fig21_28_caption = "Fig #21 to #28 (Scroll): <i>Cumulative Network Graphs for TV-Series</i>"
var fig29_caption = "Fig #29: <i>Volume 1</i>";
var fig30_caption = "Fig #30: <i>Volume 2</i>";
var fig31_caption = "Fig #31: <i>Volume 3</i>";
var fig32_caption = "Fig #32: <i>Volume 4</i>";
var fig33_caption = "Fig #33: <i>Volume 5</i>";
var fig29_33_caption = "Fig #29 to #33 (Scroll): <i>Cumulative Network Graphs for Book-Series</i>";

var map_hypergraphs_text = "To create the map hypergraphs, I had to follow the process with one more step after the hypergraph network visualization was created in Gephi. In this step, I exported the visualization into Adobe Illustrator to superimpose the hypergraph on top of the fictional world map to align with the approximate geographical location of the events. In this step a lot of contextual knowledge about the storylines was needed as I didn't have any geographical feature data about the fictional world in any of the datasets or the labels for the hypergraph nodes. In the end the outcome of this visualization provided a good approximation of the locations of the interaction clusters.";
var fig34_caption = "Fig #34: <i>Season 1</i>";
var fig35_caption = "Fig #35: <i>Season 2</i>";
var fig36_caption = "Fig #36: <i>Season 3</i>";
var fig37_caption = "Fig #37: <i>Season 4</i>";
var fig38_caption = "Fig #38: <i>Season 5</i>";
var fig39_caption = "Fig #39: <i>Season 6</i>";
var fig40_caption = "Fig #40: <i>Season 7</i>";
var fig41_caption = "Fig #41: <i>Season 8</i>";
var fig34_41_caption = "Fig #34 to #41 (Scroll): <i>Map HyperGraphs for TV-Series</i>";
var fig42_caption = "Fig #42: <i>Volume 1</i>";
var fig43_caption = "Fig #43: <i>Volume 2</i>";
var fig44_caption = "Fig #44: <i>Volume 3</i>";
var fig45_caption = "Fig #45: <i>Volume 4</i>";
var fig46_caption = "Fig #46: <i>Volume 5</i>";
var fig42_46_caption = "Fig #42 to #46 (Scroll): <i>Map HyperGraphs for Book-Series</i>";

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

    $("#network-graphs-text").html(network_graphs_text);

    $("#fig8-caption").html(fig8_caption);

    $("#fig9-caption").html(fig9_caption);

    $("#fig10-caption").html(fig10_caption);

    $("#fig11-caption").html(fig11_caption);

    $("#fig12-caption").html(fig12_caption);

    $("#fig13-caption").html(fig13_caption);

    $("#fig14-caption").html(fig14_caption);

    $("#fig15-caption").html(fig15_caption);

    $("#fig8-15-caption").html(fig8_15_caption);

    $("#fig16-caption").html(fig16_caption);

    $("#fig17-caption").html(fig17_caption);

    $("#fig18-caption").html(fig18_caption);

    $("#fig19-caption").html(fig19_caption);

    $("#fig20-caption").html(fig20_caption);

    $("#fig16-20-caption").html(fig16_20_caption);

    $("#fig21-caption").html(fig21_caption);

    $("#fig22-caption").html(fig22_caption);

    $("#fig23-caption").html(fig23_caption);

    $("#fig24-caption").html(fig24_caption);

    $("#fig25-caption").html(fig25_caption);

    $("#fig26-caption").html(fig26_caption);

    $("#fig27-caption").html(fig27_caption);

    $("#fig28-caption").html(fig28_caption);

    $("#fig21-28-caption").html(fig21_28_caption);

    $("#fig29-caption").html(fig29_caption);

    $("#fig30-caption").html(fig30_caption);

    $("#fig31-caption").html(fig31_caption);

    $("#fig32-caption").html(fig32_caption);

    $("#fig33-caption").html(fig33_caption);

    $("#fig29-33-caption").html(fig29_33_caption);

    $("#map-hypergraphs-text").html(map_hypergraphs_text);

    $("#fig34-caption").html(fig34_caption);

    $("#fig35-caption").html(fig35_caption);

    $("#fig36-caption").html(fig36_caption);

    $("#fig37-caption").html(fig37_caption);

    $("#fig38-caption").html(fig38_caption);

    $("#fig39-caption").html(fig39_caption);

    $("#fig40-caption").html(fig40_caption);

    $("#fig41-caption").html(fig41_caption);

    $("#fig34-41-caption").html(fig34_41_caption);

    $("#fig42-caption").html(fig42_caption);

    $("#fig43-caption").html(fig43_caption);

    $("#fig44-caption").html(fig44_caption);

    $("#fig45-caption").html(fig45_caption);

    $("#fig46-caption").html(fig46_caption);

    $("#fig42-46-caption").html(fig42_46_caption);

}

main();