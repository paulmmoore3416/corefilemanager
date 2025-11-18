package com.coremanager;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.web.WebView;
import javafx.stage.Stage;
import java.net.URL;

public class Main extends Application {

    @Override
    public void start(Stage primaryStage) {
        WebView webView = new WebView();
        webView.getEngine().load(getClass().getResource("/web/index.html").toExternalForm());

        Scene scene = new Scene(webView, 1200, 800);
        primaryStage.setTitle("CoreManager - Top-Tier File Manager");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}