package controller;

import model.Artifacts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import service.AmazonClient;
import service.ArtifactService;

@RestController
@RequestMapping("/storage/")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class BucketController {

    @Autowired
    ArtifactService artifactService;

    private AmazonClient amazonClient;

    @Autowired
    BucketController(AmazonClient amazonClient) {
        this.amazonClient = amazonClient;
    }

    @PostMapping("/uploadFile")
    public String uploadFile(@RequestPart(value = "file") MultipartFile file) {
        return this.amazonClient.uploadFile(file);
    }

    @DeleteMapping("/deleteFile")
    public String deleteFile(@RequestPart(value = "url") String fileUrl) {
        return this.amazonClient.deleteFileFromS3Bucket(fileUrl);
    }

    @PostMapping("/{artifactId}/uploadFile")
    public String uploadFileWithArtifact(@RequestPart(value = "file") MultipartFile file, @PathVariable("artifactId") Integer artifactId) {
        Artifacts artifact = artifactService.getArtifacts(artifactId);
        String url = this.amazonClient.uploadFile(file);
        artifact.setFilepath(url);
        artifactService.addArtifact(artifact);
        return url;
    }

    @DeleteMapping("/{artifactId}/deleteFile")
    public String deleteFileWithArtifact(@RequestPart(value = "url") String fileUrl, @PathVariable("artifactId") Integer artifactId) {
        Artifacts artifact = artifactService.getArtifacts(artifactId);
        artifact.setFilepath(null);
        artifactService.addArtifact(artifact);
        return this.amazonClient.deleteFileFromS3Bucket(fileUrl);
    }

    @PostMapping("/{artifactId}/editFile")
    public String editFileWithArtifact(@RequestPart(value = "file") MultipartFile file, @PathVariable("artifactId") Integer artifactId) {
        Artifacts artifact = artifactService.getArtifacts(artifactId);
        this.amazonClient.deleteFileFromS3Bucket(artifact.getFilepath());
        String url = this.amazonClient.uploadFile(file);
        artifact.setFilepath(url);
        artifactService.addArtifact(artifact);
        return url;
    }
}